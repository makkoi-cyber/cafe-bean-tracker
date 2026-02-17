
import { clsx } from 'clsx';
import type { FlavorProfile } from '../types';

interface FlavorLinearGraphProps {
    data: FlavorProfile;
    className?: string;
}

export function FlavorLinearGraph({ data, className = "" }: FlavorLinearGraphProps) {
    const metrics = [
        { label: '酸味', value: data.acidity },
        { label: '苦味', value: data.bitterness },
        { label: 'コク', value: data.body },
    ];

    return (
        <div className={clsx("flex flex-col gap-1.5 w-full min-w-[120px]", className)}>
            {metrics.map((metric) => (
                <div key={metric.label} className="flex items-center text-xs">
                    <span className="w-8 text-gray-500 font-medium text-[10px]">{metric.label}</span>
                    <div className="flex-1 flex gap-0.5 h-1.5 ml-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                            <div
                                key={level}
                                className={clsx(
                                    "flex-1 rounded-sm",
                                    level <= metric.value
                                        ? "bg-emerald-500"
                                        : "bg-gray-200"
                                )}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
