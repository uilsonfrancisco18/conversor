from fastapi import FastAPI
from pydantic import BaseModel
from downloader import baixar

app = FastAPI()


class DownloadRequest(BaseModel):
    url: str
    tipo: str
    qualidade: str


@app.post("/download")
def download(dados: DownloadRequest):

    resultado = baixar(
        dados.url,
        dados.tipo,
        dados.qualidade
    )

    return {
        "mensagem": resultado
    }