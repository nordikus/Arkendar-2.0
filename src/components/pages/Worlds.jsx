import React from "react";
import './worlds.css'

export const Worlds = () => {
    return <div className="homeMain">
        <div className="circle-container">
            <div className="main-container">
            <div className="circle" id='bright'>
            </div>
                <div className="title-container" id='purple'>Светлый мир</div>
                <div className="text-container">
                    <p>Простенький мир с мультивселенной, возможно практически все, приключения основываются на перемещении между разными мирами мультивселенной, правила базовые без усложнений </p>
                </div>
            </div>
            <div className="main-container">
            <div className="circle" id='dark'></div>
                <div className="title-container" id='purple'>Темный мир</div>
                <div className="text-container">
                    <p>Мир серого фэнтези, здесь более строгие условия, навыки работают по усложненной системе, а системы уровней как таковой нет, персонажи прокачивают статы со временем, реализм в общем</p>
                </div>
                </div>
            <div className="main-container">
            <div className="circle" id='space'></div>
                <div className="title-container" id='purple'>Космоопера</div>
                <div className="text-container">
                    <p>Мир космоса, похож чем-то на светлый, но имеет больше ограничений по старту, тут полноценно прописывается система космических боев,  здесь так же используется продвинутая система навыков </p>
                </div>
            </div>
        </div>
    </div>
};