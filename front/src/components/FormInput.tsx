interface FormInputProps {
    id: string;
    type?: string;
    label: string;
    value: string;
    setValue: any;
    isOptional?: boolean;
}

export default function FormInput(props: FormInputProps) {
    const { id, type = "text", label, value, setValue, isOptional = true } = props;

    return (
        <div className="w-full relative" key={id}>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="h-20 shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 text-sm"
                    placeholder={label}
                    cols={16}
                    autoComplete="off"
                ></textarea>
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 text-sm"
                    placeholder={label}
                    autoComplete="off"
                />
            )}
            <label
                htmlFor={id}
                className="absolute left-0 -top-3.5 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 text-[12px] peer-focus:text-[12px] peer-placeholder-shown:text-sm"
            >
                {label} {isOptional ? "" : "*"}
            </label>
        </div>
    );
}
