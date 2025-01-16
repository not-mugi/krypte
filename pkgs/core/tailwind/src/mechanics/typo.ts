// import { TEXT_ALIGNMENT_MAP, INLINE_VERTICAL_ALIGN_MAP } from "../maps/typo";
// // prettier-ignore
// import { KeyofMap, TextJustification, InlinePlacement } from "@mugijs/shared-core";

// /** @beta */
// export function getTextAlignClass(justification: TextJustification) {
//   if (justification in TEXT_ALIGNMENT_MAP) {
//     return TEXT_ALIGNMENT_MAP[
//       justification as KeyofMap<typeof TEXT_ALIGNMENT_MAP>
//     ];
//   }
// }

// /** @beta */
// export function getInlineYAlignClass(placement: InlinePlacement) {
//   if (placement in INLINE_VERTICAL_ALIGN_MAP) {
//     return INLINE_VERTICAL_ALIGN_MAP[
//       placement as KeyofMap<typeof INLINE_VERTICAL_ALIGN_MAP>
//     ];
//   }
// }

// /** @beta */
// export type TypoConfig = {
//   textAlign?: TextJustification;
//   inlineYAlign?: InlinePlacement;
// }

// /** @beta */
// export const TypoMechanics = {
//   textAlign: getTextAlignClass,
//   inlineYAlign: getInlineYAlignClass,
// }
