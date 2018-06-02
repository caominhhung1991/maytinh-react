import React, { PropTypes, Component } from 'react';

const MayTinh = () => {
    
    return (
        <div id="maytinh">
        <div id="maytinhheader">
            <label className="custom-check">
                <input type="checkbox" name="onOff" onClick={showMayTinhToggle()} />
                <i></i>
                <span></span>
            </label>

            <div className="tooltip">
                <i id="ghim" className="fa fa-thumb-tack ghimChecked" onClick={ghimToggle()}></i>
                <span id="tooltiptext-ghim" className="tooltiptext">Bỏ ghim</span>
            </div>

        </div>
        <div id="maytinh-content" className="animated">
            <div id="redips-drag">
            </div>
            <div id="btnShowXemThem" onClick={showXemThem()}>

            </div>
            <div id="main" role="main">
            </div>
        </div>
    </div>
    );
}

export default MayTinh;