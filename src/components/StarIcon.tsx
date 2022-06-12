import type { ParentComponent } from "solid-js";
import Icon from "../icon-star.svg";

const StarIcon: ParentComponent = () => {
    return (
        <div class="rounded-full p-4 bg-custom-very-dark-blue w-12 h-12">
            <img src={Icon} alt="Star" />
        </div>
    );
};
export default StarIcon;