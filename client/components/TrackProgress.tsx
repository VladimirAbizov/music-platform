import React from 'react';

export enum InputTypes {
    time = 'time',
    volume = 'volume'
}

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void,
    type: InputTypes
}

const TrackProgress: React.FC<TrackProgressProps> = ({
    left, right, onChange, type
}) => {

    const timePipe = (time: number): string => {
        let minutes = (time / 60).toFixed().toString()
        let seconds = (time % 60).toString()
        return minutes + ':' + seconds
    }

    const textForInput = (type: InputTypes) => {
        switch (type) {
            case InputTypes.time:
                return <div>{timePipe(left)} / {timePipe(right)}</div>

            case InputTypes.volume:
                return <div>{left}%</div>

            default:
                break;
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            {textForInput(type)}
        </div>
    )
}

export default TrackProgress;