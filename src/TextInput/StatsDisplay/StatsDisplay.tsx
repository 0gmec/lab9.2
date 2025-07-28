import {StatsDisplayProps} from '../types'

export default function StatsDisplay({stats, showReadingTime = boolean}: StatsDisplayProps) {
    return (
        <div className="StatsDisplay">
            <p>Stats Display</p>
            <p>stats: {StatsDisplayProps.stats}</p>
            <p>Reading Time: {StatsDisplayProps.stats.readingTime}</p>
        </div>
    )
}
export deafult StatsDisplay