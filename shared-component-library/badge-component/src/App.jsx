import Label from "./components/Label";
import { LABEL_COLORS, LABEL_SIZES } from "./lib/constants";

function App() {
    return (
      <div className="label-grid">
        <div className="grid-col">
          <Label size={LABEL_SIZES.SMALL} color={LABEL_COLORS.GRAY} text={'Label'}/>
          <Label size={LABEL_SIZES.SMALL} color={LABEL_COLORS.RED} text={'Label'}/>
          <Label size={LABEL_SIZES.SMALL} color={LABEL_COLORS.YELLOW} text={'Label'}/>
          <Label size={LABEL_SIZES.SMALL} color={LABEL_COLORS.GREEN} text={'Label'}/>
          <Label size={LABEL_SIZES.SMALL} color={LABEL_COLORS.BLUE} text={'Label'}/>
        </div>

        <div className="grid-col">
          <Label size={LABEL_SIZES.MEDIUM} color={LABEL_COLORS.GRAY} text={'Label'}/>
          <Label size={LABEL_SIZES.MEDIUM} color={LABEL_COLORS.RED} text={'Label'}/>
          <Label size={LABEL_SIZES.MEDIUM} color={LABEL_COLORS.YELLOW} text={'Label'}/>
          <Label size={LABEL_SIZES.MEDIUM} color={LABEL_COLORS.GREEN} text={'Label'}/>
          <Label size={LABEL_SIZES.MEDIUM} color={LABEL_COLORS.BLUE} text={'Label'}/>
        </div>

        <div className="grid-col">
          <Label size={LABEL_SIZES.LARGE} color={LABEL_COLORS.GRAY} text={'Label'}/>
          <Label size={LABEL_SIZES.LARGE} color={LABEL_COLORS.RED} text={'Label'}/>
          <Label size={LABEL_SIZES.LARGE} color={LABEL_COLORS.YELLOW} text={'Label'}/>
          <Label size={LABEL_SIZES.LARGE} color={LABEL_COLORS.GREEN} text={'Label'}/>
          <Label size={LABEL_SIZES.LARGE} color={LABEL_COLORS.BLUE} text={'Label'}/>
        </div>
      </div>
    )
}

export default App;
