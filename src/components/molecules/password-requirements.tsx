interface PasswordRequirementsComponentProps {}

const PasswordRequirementsComponent: React.FC<PasswordRequirementsComponentProps> = () => {
  return (
    <>
      <h5 className="mt-12 dark:text-white">Password requirements</h5>
      <p className="mb-2 text-slate-500 dark:text-white/60">
        Please follow this guide for a strong password:
      </p>
      <ul className="float-left pl-6 mb-0 list-disc text-slate-500">
        <li>
          <span className="leading-normal text-sm">One special characters</span>
        </li>
        <li>
          <span className="leading-normal text-sm">Min 8 characters</span>
        </li>
        <li>
          <span className="leading-normal text-sm">
            One number (2 are recommended)
          </span>
        </li>
        <li>
          <span className="leading-normal text-sm">Change it often</span>
        </li>
      </ul>
    </>
  )
}

export default PasswordRequirementsComponent
