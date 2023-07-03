interface ProgressStepsProps {
    currentStepIndex: number;
    labels: Array<string>;
}

export default function ProgressSteps(props: ProgressStepsProps) {
    return (
        <div className="pb-16 mx-auto">
            <div className="w-full relative">
                <div className="w-full h-1 flex">
                    {props.labels.map((label, index) => {
                        if (index < props.labels.length - 1) {
                            return index < props.currentStepIndex ? (
                                <div key={index} className="w-1/2 bg-indigo-700"></div>
                            ) : (
                                <div key={index} className="w-1/2 bg-gray-200"></div>
                            );
                        }
                    })}
                </div>
                <div className="flex justify-between align-items absolute w-full top-[-12px]">
                    {props.labels.map((label, index) => {
                        return index < props.currentStepIndex ? (
                            <div key={index}  className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                            </div>
                        ) : index === props.currentStepIndex ? (
                            <div key={index}  className="bg-gray-200 h-6 w-6 rounded-full shadow flex items-center justify-center relative">
                                <div className="h-3 w-3 bg-indigo-700 rounded-full"></div>
                            </div>
                        ) : (
                            <div key={index}  className="bg-gray-200 h-6 w-6 rounded-full shadow"></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
