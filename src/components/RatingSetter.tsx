import type { ParentComponent } from "solid-js";
import { For } from "solid-js";
import StarIcon from "./StarIcon";
import { rating, setRating, setSubmitted } from "./RatingCard";

const RatingSetter: ParentComponent = () => {
    return (
        <>
            <StarIcon />
            <p class="text-custom-white font-bold text-3xl"> How did we do? </p>
            <p class="text-custom-light-grey"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div class="flex items-center justify-between">
                <For each={[1, 2, 3, 4, 5]}>
                    {i => (
                        <button onClick={() => setRating(i)} class={(rating() == i ? "bg-custom-light-grey text-custom-white" : "text-custom-light-grey bg-custom-very-dark-blue") + " hover:bg-custom-orange hover:text-custom-white flex items-center justify-center rounded-full p-4 w-12 h-12"}>
                            {i}
                        </button>
                    )}
                </For>
            </div>
            <button onClick={() => {
                if (rating() > 0) setSubmitted(true);
            }} class="tracking-wide rounded-3xl bg-custom-orange w-full h-full py-3 uppercase text-custom-white font-bold text-lg hover:bg-custom-white hover:text-custom-orange"> Submit </button>
        </>
    );
};
export default RatingSetter;