# CashFusion

### Security Audit

_pending_

### Malicious Players

It’s been dismissed to me that CashFusion solves all the problems of CashShuffle, however, I have to resepectfully disagree, and here’s why:

Both protocols require an “Interactive” experience, meaning that the user has to be on-line and engaged with the other players to complete the process.

Let’s take, for example, 100 participants in a single pool. Notably, CashShuffle limits its players to 5, so there would be 20 pools. I take this to mean there is ~5% chance of rouge actor poisoning your pool.

However, with CashFusion, this is significantly higher, as there there are far less pools and much larger (as there is NO limit to the participants).

CashFusion allows for ANY transition input size and ANY transaction output size. This appears problematic when you have a single large input, sent to a single large output (that couldn’t possible be comprised of the smaller inputs, due to its size).
