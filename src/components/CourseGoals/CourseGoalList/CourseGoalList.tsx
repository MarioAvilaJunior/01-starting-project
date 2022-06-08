import React from "react";
import { IGoal } from "../../../App";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

interface ICourseGoalListProps {
  items: IGoal[];
  onDeleteItem: (goalId: string) => void;
}

const CourseGoalList = (props: ICourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
