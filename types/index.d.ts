type PostData = {
  id: string;
  contentHtml: string;
} & MdMetaData;

type MdMetaData = {
  title: string;
  date: string;
  [key: string]: any;
};
