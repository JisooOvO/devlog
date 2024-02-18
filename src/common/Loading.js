import { LoadingMessage } from "../router/Contents";
import { Board } from "./styled";

const Loading = () => {
  return (
    <Board>
      <LoadingMessage>파일을 불러오고 있습니다.</LoadingMessage>
    </Board>
  );
};

export default Loading;
