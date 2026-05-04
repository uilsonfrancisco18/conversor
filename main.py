from yt_dlp import YoutubeDL
import os

def progresso(d):
    if d['status'] == 'downloading':
        print(f"\rBaixando: {d.get('_percent_str', '0%')} | "
              f"Velocidade: {d.get('_speed_str', 'N/A')} | "
              f"Tempo restante: {d.get('_eta_str', 'N/A')}", end='')
    elif d['status'] == 'finished':
        print("\nDownload concluído! Processando arquivo...")

url = input("Cole a URL do vídeo ou playlist: ")

print("Escolha uma opção:")
print("1 - Baixar vídeo")
print("2 - Baixar música (MP3)")
opcao = input("Opção: ")

# Caminhos base
pasta_videos = "C:\\Users\\User\\Videos"
pasta_musicas = "C:\\Users\\User\\Music"

# Criar pastas base automaticamente
os.makedirs(pasta_videos, exist_ok=True)
os.makedirs(pasta_musicas, exist_ok=True)

try:
    if opcao == "1":
        opcoes = {
            'outtmpl': os.path.join(pasta_videos, '%(playlist_title)s', '%(title)s.%(ext)s'),
            'progress_hooks': [progresso],
            'ignoreerrors': True
        }

    elif opcao == "2":
        print("\nEscolha a qualidade:")
        print("1 - Leve (128 kbps)")
        print("2 - Alta (320 kbps)")
        qualidade = input("Qualidade: ")

        if qualidade == "1":
            bitrate = '128'
        elif qualidade == "2":
            bitrate = '320'
        else:
            print("Qualidade inválida!")
            exit()

        opcoes = {
            'format': 'bestaudio/best',
            'outtmpl': os.path.join(pasta_musicas, '%(playlist_title)s', '%(title)s.%(ext)s'),
            'progress_hooks': [progresso],
            'ignoreerrors': True,
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': bitrate,
            }],
        }

    else:
        print("Opção inválida!")
        exit()

    with YoutubeDL(opcoes) as ydl:
        ydl.download([url])

except Exception as e:
    print("\n❌ Erro ao baixar!")
    print("Verifique se o link é válido ou se sua internet está ok.")
    print("Detalhes do erro:", str(e))