import type { Metadata } from "next";
import FoundationCertificateCheck from "../../FoundationCertificateCheck";

export const metadata: Metadata = {
  title: "Conferir certificado | Fundação RanBank",
  description: "Confira se um certificado da Fundação RanBank é válido pelo código que aparece no pé dele.",
};

export default function FundacaoCertificadoPage() {
  return <FoundationCertificateCheck />;
}
