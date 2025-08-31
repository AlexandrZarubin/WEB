// JavaScript source code

// функция факториала
function fact(x)
{
    let res = 1;
    for (let i = 2; i <= x; i++) res *= i;
    return res;
}

// биномиальный коэффициент
function C(n, k)
{
    return fact(n) / (fact(k) * fact(n - k));
}
