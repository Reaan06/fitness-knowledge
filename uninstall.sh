#!/bin/bash

# Fitness Knowledge Skill - Uninstallation Script
# Usage: ~/.fitness-knowledge/uninstall.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Print functions
print_header() {
    echo ""
    echo -e "${CYAN}============================================================${NC}"
    echo -e "${CYAN}🏋️  Fitness Knowledge Skill Uninstaller${NC}"
    echo -e "${CYAN}============================================================${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_step() {
    echo -e "${CYAN}→ $1${NC}"
}

# Main function
main() {
    print_header
    
    INSTALL_DIR="$HOME/.fitness-knowledge"
    BIN_DIR="$HOME/.local/bin"
    
    # Remove symlinks
    print_step "Removing symlinks..."
    
    if [ -L "$BIN_DIR/fitness-knowledge" ]; then
        rm -f "$BIN_DIR/fitness-knowledge"
        print_success "Removed symlink: fitness-knowledge"
    fi
    
    if [ -L "$BIN_DIR/fk" ]; then
        rm -f "$BIN_DIR/fk"
        print_success "Removed symlink: fk"
    fi
    
    echo ""
    
    # Remove installation directory
    print_step "Removing installation directory..."
    
    if [ -d "$INSTALL_DIR" ]; then
        rm -rf "$INSTALL_DIR"
        print_success "Removed $INSTALL_DIR"
    else
        print_warning "Installation directory not found"
    fi
    
    echo ""
    
    # Print completion message
    echo -e "${GREEN}============================================================${NC}"
    echo -e "${GREEN}✅ Uninstallation Complete!${NC}"
    echo -e "${GREEN}============================================================${NC}"
    echo ""
    echo -e "The Fitness Knowledge Skill has been removed from your system."
    echo ""
    echo -e "If you want to reinstall, run:"
    echo -e "  ${CYAN}curl -fsSL https://raw.githubusercontent.com/Reaan06/fitness-knowledge/main/install.sh | bash${NC}"
    echo ""
}

# Run main function
main "$@"
