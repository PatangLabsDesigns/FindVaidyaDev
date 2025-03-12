export default function InfoCard({ icon, title, subtitle, listItems = [], isCurrent }) {
    return (
        <div className="flex flex-col gap-2 items-start p-6 border border-outline rounded-2xl bg-white shadow-md w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="text-primary-base">{icon}</div>
                {!isCurrent ? <div className="uppercase text-xs px-2 py-1 bg-primary-light text-primary-base font-base font-bold rounded-full">Coming Soon</div> : null}
            </div>
            <div f>
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
        </div>
    );
}
