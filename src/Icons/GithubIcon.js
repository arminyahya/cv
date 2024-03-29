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
                    <path class="svg-point" d="M56.59,0a56.6,56.6,0,1,0,56.6,56.59A56.59,56.59,0,0,0,56.59,0ZM86.12,50.76C84.47,61.16,75.27,65.11,66.42,66c3,1.92,3.93,4.33,3.93,10.85s-.08,7.4-.07,8.9c0,2.47,3.65,3.64,3.51,4.43s-3,.67-4.37.2C65.61,89.07,66,85.89,66,85.89l-.58-8.72s-.33-4.7-1.92-4.7V86.75c0,3.1,2.62,4,2.62,5.19,0,2-3.75-.18-5-1.42-1.86-1.87-1.54-5.83-1.49-9s0-9.66,0-9.66l-1.23,0S59,86.39,57.78,89c-1.53,3.38-6.15,4.55-6.15,3,0-1,1.14-.7,1.77-3,.54-2,.36-16.74.36-16.74s-1.48.88-1.48,3.64c0,1.27,0,8.5,0,10.65,0,2.7-3.85,4.24-5.69,4.24-.94,0-2.1,0-2.1-.54,0-1.25,3.51-2,3.51-4.59,0-2.26,0-8.06,0-8.06a28.44,28.44,0,0,1-4.3.3c-6.37,0-8.38-4.07-9.34-6.34a11.12,11.12,0,0,0-4.59-5.47c-1.06-.68-1.3-1.49-.08-1.72,5.64-1.06,7.09,6.4,10.85,7.59,2.69.84,6.15.48,7.87-.63a8.16,8.16,0,0,1,3.24-5.29C42.48,65.18,33.22,60.14,31,48.46a37.53,37.53,0,0,1-.25-4.21c0-6.16,1.93-8.49,4.5-11.77-2-7,.71-11.84.71-11.84s4.15-.86,12,4.76c4.25-1.83,15.58-2,20.94-.41,3.28-2.17,9.3-5.26,11.73-4.4.66,1.06,2.07,4.14.86,10.93.82,1.48,5.1,4.65,5.12,13.59A40.83,40.83,0,0,1,86.12,50.76Z" />
                </svg>
            </div>
        );
    }
}