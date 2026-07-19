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
        return "Tipo de download inválido."

    try:
        with YoutubeDL(opcoes) as ydl:
            ydl.download([url])

        return "Download concluído com sucesso!"

    except Exception as e:
        erro = str(e).lower()
        print("ERRO:", erro)

        if "video unavailable" in erro:
            return "Este vídeo não está disponível."

        elif "private video" in erro:
            return "Este vídeo é privado."

        elif "unsupported url" in erro:
            return "Este link não é suportado."

        elif "instagram" in erro:
            return "Não foi possível baixar este conteúdo do Instagram."

        elif "sign in to confirm your age" in erro:
            return "Este vídeo possui restrição de idade."

        elif "unable to extract" in erro:
            return "Não foi possível processar este vídeo."

        return "Não foi possível concluir o download."