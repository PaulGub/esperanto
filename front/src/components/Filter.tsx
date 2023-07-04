import { filterProps } from "../utils/types";

export default function Filter({ rotate, info, state, dispatch }: filterProps) {
  return (
    <div className={`${rotate ? "h-0" : "h-auto"} transition`}>
      <div className="flex items-center justify-between mt-2">
        <div className="line-clamp-1 truncate">
          <input
            type="checkbox"
            id={info.name}
            className="!w-4 !h-4 border border-primary"
            onChange={(e) => {
              dispatch({
                ...state,
                [info.name]: e.target.checked,
              });
            }}
          />
          <label htmlFor={info.name}>{info.name}</label>
        </div>
        <div className="text-xs text-slate-400">{info.count}</div>
      </div>
    </div>
  );
}
