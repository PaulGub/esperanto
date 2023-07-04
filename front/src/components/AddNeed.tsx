import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { Tag } from "../utils/types/data";
import { getAllTags } from "./apolloClient/ApiCalls";

enum NeedType {
    Material = "Material",
    Professional = "Professional", 
    Infrastructure = "Infrastructure"
}

export default function AddNeed() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [allTags, setAllTags] = useState<Tag[]>([]);
    const [isSelectTagOpen, setIsSelectTagOpen] = useState(false);

    const [title, setTitlte] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [type, setType] = useState<NeedType|string>(NeedType.Professional);
    const [infrastructure, setInfrastructure] = useState<string>("");
    const [tags, setTags] = useState<Tag[]>([]);

    const toggleFormVisibility = (): void => {
        setIsFormVisible(!isFormVisible);
    };

    const toggleSelectVisibility = (): void => {
        setIsSelectTagOpen(!isSelectTagOpen);
    };

    const handleTagSelection = (tag: Tag): void => {
        setIsSelectTagOpen(false);
        setTags([...tags, tag]);
        setAllTags(allTags.filter((t) => t.id !== tag.id));
    };

    const submitForm = (): void => {
        console.log("need created !");
    };
    
    useEffect(() => {
        getAllTags()
            .then((tagData) => {
                setAllTags(tagData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="flex flex-col gap-4 justify-start bg-white border border-solid rounded-lg p-4 relative">
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                    <h3 className="text-sm pb-1">Ajouter un besoin</h3>
                    <span className="w-1/4 bg-primary-300 rounded h-1"></span>
                </div>
                <div
                    className="flex justify-center items-center w-[35px] h-[35px] rounded-full hover:bg-gray-100 cursor-pointer"
                    onClick={toggleFormVisibility}
                >
                    <img className="w-[30px] h-[30px]" src={isFormVisible ? "/src/assets/minus.png" : "/src/assets/plus.png"} alt="add" />
                </div>
            </div>
            {isFormVisible && (
                <div className="flex flex-col gap-2">
                    <FormInput
                        id="title"
                        type="text"
                        label="Titre"
                        value={title}
                        setValue={setTitlte}
                    />
                    <div className="relative">
                        <select
                            id="type"
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="shadow-none peer placeholder-transparent h-10 w-full border-t-0 border-r-0 border-l-0 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 text-sm"
                        >
                            <option value={NeedType.Professional}>{NeedType.Professional}</option>
                            <option value={NeedType.Material}>{NeedType.Material}</option>
                            <option value={NeedType.Infrastructure}>{NeedType.Infrastructure}</option>
                        </select>
                        <label
                            htmlFor="role"
                            className="absolute left-0 -top-3.5 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 text-[12px] peer-focus:text-[12px] peer-placeholder-shown:text-sm"
                        >
                            Rôle
                        </label>
                    </div>
                    <div className="flex flex-col items-start justify-center mb-4">
                        <h3 className="text-sm text-gray-400">Tags</h3>
                        <div className="text-xxs flex flex-wrap mt-2">
                            {tags.map((tag) => (
                                <span key={tag.id} className="bg-primary-100 rounded py-0.5 px-1 m-0.5">
                                    {tag.name}
                                </span>
                            ))}
                            <a href="#" className="text-primary hover:underline mt-[3px] py-0.5 px-1 m-0.5" onClick={toggleSelectVisibility}>
                                Ajouter un tag
                            </a>
                        </div>
                        {isSelectTagOpen && (
                            <div>
                                <select
                                    className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring text-[14px]"
                                    value={""}
                                    onChange={(e) => {
                                        const selectedTagId = e.target.value;
                                        const tag = allTags.find((tag) => tag.id === selectedTagId);
                                        if (tag) {
                                            handleTagSelection(tag);
                                        }
                                    }}
                                >
                                    <option value="">-- Sélectionnez un tag --</option>
                                    {allTags.map((tag) => (
                                        <option key={tag.id} value={tag.id}>
                                            {tag.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <FormInput
                        id="infrastructure"
                        type="text"
                        label="Infrastructure"
                        value={infrastructure}
                        setValue={setInfrastructure}
                    />
                    <FormInput
                        id="description"
                        type="textarea"
                        label="Description"
                        value={description}
                        setValue={setDescription}
                    />
                    <div className="pt-4 flex items-center space-x-4">
                        <button
                            onClick={() => submitForm()}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Créer le besoin
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
