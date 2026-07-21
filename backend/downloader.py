from yt_dlp import YoutubeDL
import os


def baixar(url: str, tipo: str, qualidade: str):
    pasta = "downloads"
    os.makedirs(pasta, exist_ok=True)

    if tipo == "video":
        opcoes = {
            "format": "bv*+ba/b",
            "merge_output_format": "mp4",
            "noplaylist": True,
            "verbose": True,
            "outtmpl": os.path.join(
                pasta,
                "%(title)s.%(ext)s"
            ),
        }

    elif tipo == "mp3":
        opcoes = {
            "format": "bestaudio",
            "outtmpl": os.path.join(
                pasta,
                "%(title)s.%(ext)s"
            ),
            "postprocessors": [{
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": qualidade
            }]
        }

    else:
        return {
            "mensagem": "Tipo de download inválido.",
            "arquivo": None
        }

    try:
        with YoutubeDL(opcoes) as ydl:
            info = ydl.extract_info(url, download=True)

        titulo = info.get("title", "Arquivo desconhecido")

        extensao = "mp4" if tipo == "video" else "mp3"

        nome_arquivo = f"{titulo}.{extensao}"

        return {
            "mensagem": "Download concluído com sucesso!",
            "arquivo": nome_arquivo
        }

    except Exception as e:
        erro = str(e).lower()
        print("ERRO:", erro)

        if "video unavailable" in erro:
            mensagem = "Este vídeo não está disponível."

        elif "private video" in erro:
            mensagem = "Este vídeo é privado."

        elif "unsupported url" in erro:
            mensagem = "Este link não é suportado."

        elif "instagram" in erro:
            mensagem = "Não foi possível baixar este conteúdo do Instagram."

        elif "sign in to confirm your age" in erro:
            mensagem = "Este vídeo possui restrição de idade."

        elif "unable to extract" in erro:
            mensagem = "Não foi possível processar este vídeo."

        else:
            mensagem = "Não foi possível concluir o download."

        return {
            "mensagem": mensagem,
            "arquivo": None
        }