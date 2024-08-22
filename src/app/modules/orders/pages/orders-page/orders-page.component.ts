import { Component, inject, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { OrderState } from '../../../../store/Order/order.reducer'
import { Observable, tap } from 'rxjs'
import { getOrderDetails } from '../../../../store/Order/order.selectors'
import { CommonModule } from '@angular/common'
import html2canvas from "html2canvas"
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { CartState } from '../../../../store/Cart/cart.reducer'
import { Product } from '../../../core/models/product'
import { getCartItems } from '../../../../store/Cart/cart.selectors'
import { CartItem } from '../../../core/models/CartItem'
import QRCode from 'qrcode';

@Component({
  selector: 'Gosto-orders-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss'
})
export class OrdersPageComponent implements OnInit {

  _store = inject(Store<OrderState | CartState>)
  order$!: Observable<any>
  orderDetails$!: Observable<any>
  info: any
  products: CartItem[] = []

  ngOnInit(): void {
    this.getOrderDetails();
    this.getProductsInCart();
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  getOrderDetails() {
    this.orderDetails$ = this._store.select(getOrderDetails).pipe(
      tap(data => this.info = data),
      tap(data => console.log("Data", data))
    )
  }

  getProductsInCart() {
    this._store.select(getCartItems).subscribe(products => {
      this.products = products
    })
  }

  downloadReceipt() {
    const doc = new jsPDF("p", "mm", "a4");

    // Add Company Logo
    doc.addImage('../../../../../assets/images/dark-logo.png', 'PNG', 10, 10, 30, 10);

    // Need to add real URL
    const qrData = 'https://gosto.com/track-order/123456';
    QRCode.toDataURL(qrData, { width: 100 }, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      // Add QR Code Image to PDF
      doc.addImage(url, 'PNG', 160, 50, 40, 40);
    })


    // Receipt Title
    doc.setFontSize(22);
    doc.text('Inventory Receipt', 105, 40, undefined, 'center');

    // Date
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 160, 20);


    // Inventory Table
    const tableColumn = ["Product ID", "Product Name", "Category", "Quantity", "Price per Unit", "Total Value"];
    const tableRows: any = [];

    this.products.forEach(item => {
      const productData = [
        item.id.toString(),
        item.name,
        item.category,
        item.quantity?.toString(),
        `$${item.price.toFixed(2)}`,
        `$${((item.quantity ?? 1) * item.price).toFixed(2)}`
      ];
      tableRows.push(productData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 130,
      styles: { fillColor: [220, 220, 220] },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      columnStyles: { 0: { cellWidth: 20 }, 4: { cellWidth: 35 }, 5: { cellWidth: 35 } },
      theme: 'grid'
    });

    // Company Information
    doc.setFontSize(13);
    doc.text('Gosto E-Commerce', 10, 60);
    doc.text('Address: 1234 E-commerce St, Cairo, Egypt', 10, 68);
    doc.text('Phone: +20 123 456 789', 10, 76);
    doc.text('Email: support@gosto.com', 10, 84);

    // Line Break
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(10, 90, 200, 90);

    // Customer Information (if applicable, otherwise skip this section)
    const { postcode, state, city, country } = this.info.shippingDetails.shippingAddress
    const { firstName, lastName, phone } = this.info.billingDetails
    doc.setFontSize(13);
    doc.text(`Customer Name: ${firstName} ${lastName}`, 10, 100);
    doc.text(`Shipping Address: ${postcode} ${state}, ${city}, ${country}`, 10, 108);
    doc.text(`Phone: ${phone}`, 10, 116);

    // Summary Section
    let finalY = (doc as any).lastAutoTable.finalY;
    doc.setFontSize(14);
    doc.text(`Total Inventory Value: $${this.calculateTotalValue().toFixed(2)}`, 10, finalY + 20);

    // Footer
    doc.setFontSize(10);
    doc.text('For inquiries, contact us at support@gosto.com', 10, 285);
    doc.text(`Page ${1}`, 185, 285);

    // Save the PDF
    doc.save('inventory-receipt.pdf');
  }

  // Function to Calculate Total Inventory Value
  calculateTotalValue() {
    return this.products.reduce((sum, item) => sum + ((item.quantity ?? 1) * item.price), 0);
  }


}
