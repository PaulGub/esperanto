import { filterProps } from "../utils/types";

export default function Filter({ rotate, info, state, dispatch }: filterProps) {
  return (
    <div className={`${rotate ? "h-0" : "h-auto"} transition overflow-hidden`}>
      <div className="flex items-center justify-between mt-2">
        <div>
          <input
            type="checkbox"
            id={info.label}
            className="!w-4 !h-4"
            onChange={(e) => {
              dispatch({
                ...state,
                [info.label]: e.target.checked,
              });
            }}
          />
          <label htmlFor={info.label}>{info.label}</label>
        </div>
        <div className="text-xs text-slate-400">{info.number}</div>
      </div>
    </div>
  );
}
