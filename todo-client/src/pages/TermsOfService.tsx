export const TermsOfService = () => {
  return (
    <div className="flex flex-col gap-3 mx-auto w-2/6 md:w-3/6 grow items-start mt-4">
      <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
      <p className="mb-4">
        Thank you for choosing SupaFocus app. By using our service, you agree to
        the following terms and conditions:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          Our app is intended to help you manage your tasks more effectively,
          but we cannot guarantee its accuracy or completeness.
        </li>
        <li className="mb-2">
          You agree to use the app only for lawful purposes and in compliance
          with all applicable laws and regulations.
        </li>
        <li className="mb-2">
          You are responsible for maintaining the confidentiality of your
          account information and password.
        </li>
        <li className="mb-2">
          We reserve the right to terminate or suspend your access to the app at
          any time and for any reason.
        </li>
        <li className="mb-2">
          We may make changes to the app or these terms of service at any time
          and without notice.
        </li>
        <li className="mb-2">
          We are not responsible for any damages or losses arising from your use
          of the app or any failure or delay in its performance.
        </li>
        <li className="mb-2">
          Our app may contain links to third-party websites or services, but we
          are not responsible for their content or privacy practices.
        </li>
      </ol>
      <p className="mb-4">
        By using SupaFocus app, you agree to these terms of service. If you do
        not agree to these terms, please do not use the app.
      </p>
    </div>
  );
};
