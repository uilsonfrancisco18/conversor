from yt_dlp import YoutubeDL
import os


def baixar(url: str, tipo: str, qualidade: str):
    pasta = "downloads"
    os.makedirs(pasta, exist_ok=True)

    if tipo == "video":
        opcoes = {
            "format": "bestvideo+bestaudio/best",
            "merge_output_format": "mp4",
            "outtmpl": os.path.join(pasta, "%(title)s.%(ext)s"),
        }
    elif tipo == "mp3":
        opcoes = {
            "format": "bestaudio",
            "outtmpl": os.path.join(pasta, "%(title)s.%(ext)s"),
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
        print("ERRO:", e)
        raise