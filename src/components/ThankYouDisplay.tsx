import type { ParentComponent } from "solid-js";
import ThankYouIcon from "../illustration-thank-you.svg";
import { rating } from "./RatingCard";

const ThankYouDisplay: ParentComponent = () => {
    return (
        <div class="flex flex-col items-center justify-center space-y-7">
            <img src={ThankYouIcon} alt="Thank you" />
            <p class="text-custom-orange bg-custom-very-dark-blue rounded-3xl py-2 px-6"> You selected {rating()} out of 5 </p>
            <p class="text-3xl text-custom-white"> Thank you! </p>
            <p class="text-custom-light-grey text-center">
                We appreciate you taking the time to give a rating.
                <br /> If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    );
};
export default ThankYouDisplay;