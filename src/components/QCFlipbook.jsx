import HTMLFlipBook from "@cdk0507/react-pageflip";
import qcflipbook from "../data/qcflipbook";
const QCFlipBook = () => {
  return (
    <HTMLFlipBook
      width={700}
      height={600}
      size="stretch"
      minWidth={300}
      maxWidth={700}
      minHeight={300}
      maxHeight={600}
      maxShadowOpacity={0.5}
      mobileScrollSupport={true}
    >
      {qcflipbook.map((page) => (
        <img key={page.id} src={page.image} className="object-contain" />
      ))}
    </HTMLFlipBook>
  );
};

export default QCFlipBook;
