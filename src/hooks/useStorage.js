import {ThirdwebStorage} from "@thirdweb-dev/storage";

const storage = new ThirdwebStorage();

function useStorage() {
  const uploadOnIpfs = async (metadata) => {
    const uri = await storage.upload(metadata);
    return uri;
  };

  const downloadJSONFromIpfs = async (uri) => {
    const data = await storage.downloadJSON(uri);
    return data;
  };

  const downloadIpfs = async (uri) => {
    const data = await storage.download(uri);
    return data;
  };

  return {
    uploadOnIpfs,
    downloadJSONFromIpfs,
    downloadIpfs
  };
}

export default useStorage;
