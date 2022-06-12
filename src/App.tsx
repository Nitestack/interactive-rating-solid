import RatingCard from "./components/RatingCard";

function App() {
    return (
        <div class="App bg-custom-very-dark-blue">
            <div class="flex items-center justify-center min-h-screen w-full p-5 sm:p-10 lg:p-14">
                <div class="space-y-4">
                    <RatingCard />
                </div>
            </div>
        </div>
    );
};

export default App;