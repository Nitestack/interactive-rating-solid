import type { ParentComponent } from "solid-js";
import { For } from "solid-js";
import { rating, setRating } from "./RatingCard";

const RatingSetterStars: ParentComponent = () => {
    return (
        <div class="flex items-center justify-between">
            <For each={[1, 2, 3, 4, 5]}>
                {i => (
                    <button onClick={() => setRating(i)} class={(rating() == i ? "bg-custom-light-grey text-custom-white" : "text-custom-light-grey bg-custom-very-dark-blue") + " hover:bg-custom-orange hover:text-custom-white flex items-center justify-center rounded-full p-4 w-12 h-12"}>
                        {i}
                    </button>
                )}
            </For>
        </div>
    );
};
export default RatingSetterStars;