import React from "react";

import "./CourseGoalItem.css";

interface ICourseGoalItemProps {
  id: string;
  children: React.ReactNode;
  onDelete: (goalId: string) => void;
}

const CourseGoalItem = (props: ICourseGoalItemProps) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
