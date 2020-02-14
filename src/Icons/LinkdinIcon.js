import React from "react";

export default class TrashIcon extends React.PureComponent {
    render() {
        return (
            <div
                {...this.props}
                className={
                    "icon icon--biography" +
                    (this.props.className ? " " + this.props.className : "")
                }
            >
                <svg viewBox="0 0 113.19 113.19">
                    <path class="svg-point" d="M56.59,0a56.6,56.6,0,1,0,56.6,56.59A56.59,56.59,0,0,0,56.59,0ZM38.81,44.69h-.06a5,5,0,0,1-5.38-5.07c0-2.87,2.18-5.06,5.51-5.06a5.07,5.07,0,0,1,5.45,5.06C44.33,42.44,42.21,44.69,38.81,44.69Zm4.87,4V78H33.94V48.69ZM78.83,78H69.09V62.32c0-4-1.41-6.63-4.94-6.63a5.34,5.34,0,0,0-5,3.56,6.66,6.66,0,0,0-.32,2.38V78H49.09s.12-26.57,0-29.32h9.74v4.15A9.65,9.65,0,0,1,67.61,48C74,48,78.83,52.19,78.83,61.19Z" />
                </svg>
            </div>
        );
    }
}