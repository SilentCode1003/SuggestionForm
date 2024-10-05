import React, { useState } from 'react';
import suggestionsData from '../assets/TextInfo.json';

const Bottom = () => {

    return (
        <div className="p-">

            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="text-gray-600 mb- text-[12px] text-center">{suggestionsData.BottomMessage}</label>
                </div>


            </form>
        </div>
    );
};

export default Bottom;
