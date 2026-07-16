from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from downloader import baixar

app = FastAPI()


# Permitir comunicação com o frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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