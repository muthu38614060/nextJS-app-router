'use client'

import { useCounterStore } from '../../../stores/useCounterStore'
import { useRouter } from "next/navigation";

import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  CreditCard,
  ArrowRight,
} from 'lucide-react'
import { use } from 'react';

export default function OrderSummary() {
  const items = useCounterStore((state) => state.items)
  const router = useRouter()
  const grandTotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0
    return acc + price * (item.itemCount || 1)
  }, 0)

  const totalItems = items.reduce(
    (acc, item) => acc + (item.itemCount || 1),
    0
  )

  function goHome(){
   router.push('/admin/dashboard/')
  }

  function handlePaymentPage(){
   router.push('/admin/dashboard/payment')

  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <ShoppingBag className="h-10 w-10 text-gray-400" />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-gray-900">
          Your cart is empty
        </h2>

        <p className="mt-2 text-gray-500">
          Add some products to continue shopping.
        </p>

        <button className="mt-8 rounded-2xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700" onClick={goHome}>
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* TOP HEADER */}
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-8 text-white shadow-2xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-indigo-200">
                Checkout
              </p>

              <h1 className="text-4xl font-black tracking-tight">
                Order Summary
              </h1>

              <p className="mt-3 text-indigo-100">
                You have {totalItems} items in your cart
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
              <ShoppingBag className="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="space-y-6 lg:col-span-2">
            {/* CART ITEMS */}
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Cart Items
                </h2>

                <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
                  {totalItems} Products
                </span>
              </div>

              <div className="space-y-5">
                {items.map((item, index) => {
                  const price = parseFloat(item.price) || 0
                  const quantity = item.itemCount || 1
                  const total = price * quantity

                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-5 rounded-3xl border border-gray-100 p-5 transition hover:shadow-lg md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-24 w-24 overflow-hidden rounded-2xl bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Quantity: {quantity}
                          </p>

                          <p className="mt-2 text-lg font-semibold text-indigo-600">
                            ₹{price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-400">Subtotal</p>

                        <p className="text-2xl font-black text-gray-900">
                          ₹{total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <Truck className="h-7 w-7 text-indigo-600" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Free Shipping
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Fast delivery on all orders above ₹999
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <ShieldCheck className="h-7 w-7 text-green-600" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Secure Payment
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Your transactions are fully protected
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
                  <CreditCard className="h-7 w-7 text-pink-600" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Easy Checkout
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Smooth and hassle-free payment process
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="sticky top-8 rounded-3xl bg-white p-8 shadow-2xl">
              <h2 className="text-2xl font-black text-gray-900">
                Payment Summary
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Items Total</span>

                  <span className="font-semibold text-gray-900">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Shipping</span>

                  <span className="font-semibold text-green-600">
                    Free
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Tax</span>

                  <span className="font-semibold text-gray-900">
                    ₹0.00
                  </span>
                </div>

                <div className="border-t pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Grand Total
                    </span>

                    <span className="text-3xl font-black text-indigo-600">
                      ₹{grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-2xl" onClick={handlePaymentPage}>
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="mt-4 text-center text-sm text-gray-400">
                Safe & Secure Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}