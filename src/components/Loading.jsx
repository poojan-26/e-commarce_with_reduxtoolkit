// START IMPORT //
import loadingGif from "../images/loading-furniture-2.gif";
// END IMPORT //

export default function Loading() {
  // START RENDER //
  return (
    <div className="page-loading">
      <img src={loadingGif} />
    </div>
  );
  // END RENDER //
}
