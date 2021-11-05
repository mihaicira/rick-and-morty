function SideInfoLabel({className,label,value}){
        return <div className={className}>
            <span>{label}:</span>
            <span>{value}</span>
        </div>
}

export default SideInfoLabel;