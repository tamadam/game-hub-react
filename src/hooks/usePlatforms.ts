import useData from "./useData";

export interface PlatformSelectorInterface {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<PlatformSelectorInterface>("/platforms/lists/parents")

export default usePlatforms;