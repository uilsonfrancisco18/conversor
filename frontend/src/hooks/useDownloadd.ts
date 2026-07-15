import { useState } from "react";

export function useDownload() {
  const [url, setUrl] = useState("");
  const [tipo, setTipo] = useState("video");
  const [qualidade, setQualidade] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    console.log({
      url,
      tipo,
      qualidade,
    });
  };

  return {
    url,
    setUrl,
    tipo,
    setTipo,
    qualidade,
    setQualidade,
    loading,
    setLoading,
    handleDownload,
  };
}