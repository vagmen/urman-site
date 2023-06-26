import { withId } from "react-yandex-metrika";

type IGoalName =
    | "formCallBackFromModal"
    | "phoneHeader"
    | "phoneBody"
    | "tel1"
    | "phoneFooter"
    | "formWithQuestion"
    | "formCallBack";

export const ymTrigger = (goalName: IGoalName) => {
    console.log("reachGoal", goalName);
    withId(Number(process.env.YANDEX_METRIKA_ID))("reachGoal", goalName);
};
