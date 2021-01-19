import Button from '../Button/Button';
import Styles from "./actions.module.css";

const ActionPanes = ({ currentPane, handleSelection}) => {
    return (
        <div className={Styles.panes_wrapper}>
            <Button
                type="pane"
                text="Presidential" 
                isSelected={currentPane === 0}
                handleAction={() => handleSelection(0)}
            />
            <Button 
                type="pane"
                text="Vice Presidential" 
                isSelected={currentPane === 1}
                handleAction={() => handleSelection(1)}
            />
            <Button
                type="pane"
                text="General Secretary"
                isSelected={currentPane === 2}
                handleAction={() => handleSelection(2)}
            />
            <Button 
                type = "pane"
                text = "Financial Secretary"
                isSelected={currentPane === 3}
                handleAction={() => handleSelection(3)}
            />
            <Button 
                type = "pane"
                text = "Public Relations"
                isSelected={currentPane === 4}
                handleAction={() => handleSelection(4)}
            />
            <Button 
                type = "pane"
                text = "General Organizer"
                isSelected={currentPane === 5}
                handleAction={() => handleSelection(5)}
            />
            <Button 
                type = "pane"
                text = "Cordinating Secretary"
                isSelected={currentPane === 6}
                handleAction={() => handleSelection(6)}
            />
            <Button 
                type = "pane"
                text = "Press and Information"
                isSelected={currentPane === 7}
                handleAction={() => handleSelection(7)}
            />
            <Button 
                type = "pane"
                text = "Computer Prefect"
                isSelected={currentPane === 8}
                handleAction={() => handleSelection(8)}
            />
            <Button 
                type = "pane"
                text = "Utility/Water Prefect"
                isSelected={currentPane === 9}
                handleAction={() => handleSelection(9)}
            />
        </div>
    )
}

export default ActionPanes;