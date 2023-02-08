import React from 'react';

const Loader = () => (
    <div className="flex justify-center items-center">
        <div className="grid min-h-screen place-content-center">
            <div className="flex items-center gap-2 text-primary">
                <span className="h-6 w-6 block rounded-full border-4 border-t-white animate-spin" />
                loading...
            </div>

        </div>
    </div>
);
export default Loader;
