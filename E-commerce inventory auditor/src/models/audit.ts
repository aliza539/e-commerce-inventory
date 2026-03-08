export abstract class Audit {

  protected auditCount = 0

  increment() {
    this.auditCount++
  }

  getCount() {
    return this.auditCount
  }

  abstract runAudit(): void

}