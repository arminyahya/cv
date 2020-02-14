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
                    <path className="svg-point" d="M73.85,39.7,48,63.76A5.37,5.37,0,0,0,46.3,67l-.88,6.53a.81.81,0,0,1-1.58.11L40.45,61.7a3.15,3.15,0,0,1,1.38-3.55L73.19,38.84A.54.54,0,0,1,73.85,39.7Z" />
                    <path class="svg-point" d="M104.45,26.38a56.6,56.6,0,1,0,8.74,30.21A56.72,56.72,0,0,0,104.45,26.38ZM88.94,28.56,77.12,85.4a1.89,1.89,0,0,1-3,1.14L58,74.83a2.69,2.69,0,0,0-3.26.09l-8.94,7.29a1.89,1.89,0,0,1-3-.9l-6.21-20-16-6a1.89,1.89,0,0,1,0-3.54l65.86-25.4A1.89,1.89,0,0,1,88.94,28.56Z" /></svg>
            </div>
        );
    }
}