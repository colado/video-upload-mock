import { VideosTable } from './videos-table';
import { SearchBar } from './search-bar';
import { ProcessedVideo } from '../common/interfaces';

type SearchBarProps = {
  videos: ProcessedVideo[];
  setFilterValue: (filer: string) => void;
  onVideoDelete: (id: number) => void;
};

export const MainContent = ({ videos, setFilterValue, onVideoDelete }: SearchBarProps) => {


  return (
    <>
      <h1>VManager Demo v0.0.1</h1>
      <SearchBar onSearch={setFilterValue} />
      <VideosTable onVideoDelete={onVideoDelete} videos={videos} />
    </>
  );
};
