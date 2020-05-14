# CashFusion

An enhancement to the __[CashShuffle protocol,](cashshuffle.md)__ which allows the "toxic waste" of shuffled coins to then be "fused" back together to form larger coins. This provides a tremendous convenience, that allow for larger "private" transactions to be performed using a single coin input.

### Security Audit

_pending..._

### Malicious Players

It’s been proposed (by several noteworthy individuals) that CashFusion solves all the problems of CashShuffle, however, that remains a matter of option and perspective. Why?

Both protocols require an "interactive" experience, meaning that the user has to be on-line and engaged with the other players in order to complete the process.

For example, consider 100 participants in a single pool. Notably, CashShuffle limits its players to 5, so there would be 20 pools. Meaning there is an ~5% chance of a rouge actor poisoning this pool.

<span style="text-decoration: line-through;">
However, with CashFusion, this is significantly higher, as there there are far less pools and much larger (as there is NO limit to the participants).
</span>

<span style="text-decoration: line-through;">
CashFusion allows for ANY transition input size and ANY transaction output size. This appears problematic when you have a single large input, sent to a single large output (that couldn’t possible be comprised of the smaller inputs, due to its size).
</span>
