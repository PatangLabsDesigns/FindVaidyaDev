export default function InfoCard({ icon, title, subtitle, listItems = [] }) {
    return (
        <div className="flex flex-col gap-2 items-start p-6 border border-outline rounded-2xl bg-white shadow-md">
            <div className="text-primary-base">{icon}</div>
            <h3 className="text-lg font-bold text-text-heading">{title}</h3>
            {subtitle && <p className="text-sm text-text-light">{subtitle}</p>}

            {/* Conditionally render list if listItems are provided */}
            {listItems.length > 0 && (
                <ul className="text-text-light list-disc pl-6">
                    {listItems.map((item, index) => (
                        <li key={index}>
                            <span className="font-bold">{item.bold}:</span> {item.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
