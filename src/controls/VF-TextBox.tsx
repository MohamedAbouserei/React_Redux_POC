import * as React from "react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import {
  TextField,
  MaskedTextField,
  ITextFieldStyleProps,
  ITextFieldStyles,
} from "office-ui-fabric-react/lib/TextField";
import {
  TooltipHost,
  ITooltipHostStyles,
} from "office-ui-fabric-react/lib/Tooltip";

import styles from "./ControlStyles.module.scss";

interface textboxProps {
  value: string;
  handleInputChange(event);
  handleOnBlur(event);
  ctrlName: string;
  label: string;
  showError?: Boolean;
  Required: boolean;
  errorMessage?: string;
  tooltip?: boolean;
  tooltipText?: string;
  disabled?: boolean;
  isMultiline?: boolean;
  inputType?: string;
  maxLength?: number;
}

export const VFTextBox: React.FC<textboxProps> = (props) => {
  let requiredView: {};
  let tooltipView: {};
  if (props.showError)
    return (
      <div className={styles.field + " " + styles.error}>
        <label>
          {props.label}

          {props.Required && <span>*</span>}
          {props.tooltip && (
            <TooltipHost
              content={props.tooltipText}
              closeDelay={500}
              hostClassName={styles.tooltipBox}
            >
              <Icon iconName="InfoSolid" />
            </TooltipHost>
          )}
        </label>

        <TextField
          styles={getStyles}
          name={props.ctrlName}
          disabled={props.disabled}
          multiline={props.isMultiline}
          autoAdjustHeight={props.isMultiline}
          value={props.value}
          type={props.inputType}
          maxLength={props.maxLength}
          errorMessage={props.errorMessage}
          onChange={props.handleInputChange}
          onBlur={props.handleOnBlur}
        />
      </div>
    );

  return (
    <div className={styles.field}>
      <label>
        {props.label}

        {props.Required && <span>*</span>}
        {props.tooltip && (
          <TooltipHost
            content={props.tooltipText}
            closeDelay={500}
            hostClassName={styles.tooltipBox}
          >
            <Icon iconName="InfoSolid" />
          </TooltipHost>
        )}
      </label>

      <TextField
        styles={getStyles}
        name={props.ctrlName}
        disabled={props.disabled}
        multiline={props.isMultiline}
        autoAdjustHeight={props.isMultiline}
        value={props.value}
        type={props.inputType}
        maxLength={props.maxLength}
        onChange={props.handleInputChange}
        onBlur={props.handleOnBlur}
      />
    </div>
  );
};

function getStyles(props: ITextFieldStyleProps): Partial<ITextFieldStyles> {
  return {
    fieldGroup: [styles.fieldGroupBox],
    errorMessage: [styles.validateMessage],
  };
}
